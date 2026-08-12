const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/users.json')

const dataHandler = {

    getUsers: () => {
        try {
            ensureFileExists()
            const fileData = fs.readFileSync(filePath, 'utf-8')
            return JSON.parse(fileData)
        } catch (error) {
            console.error('خطأ اثناء قراءة ملف المستخدمين ', error.message)
            return []
        }
    },

    saveUser: (usersArray) => {
        try {
            const jsonData = JSON.stringify(usersArray, null, 2)
            fs.writeFileSync(filePath, jsonData, 'utf-8')
            return true;
        } catch (error) {
            console.log('خطأ أثناء حفظ البيانات', error.message)
            return false
        }
    },

    addUser: (newUserData) => {
        try {

            const users = dataHandler.getUsers()

            const nextId = users.length > 0 ? users.length + 1 : 1;

            const newUser = { id: nextId, ...newUserData }
            users.push(newUser)

            const isSaved = dataHandler.saveUser(users)

            return newUser
        } catch (error) {
            console.log('فشل إضافة مستخدم', error.mwssage)
            return null;
        }
    },

    getUserById: (id) => {
        try {
            const users = dataHandler.getUsers()
            const user = users.find(u => u.id === Number(id))
            return user;
        } catch (error) {
            console.log('خطأ في البحث', error.messgae)
            return null
        }
    }
}

module.export = dataHandler