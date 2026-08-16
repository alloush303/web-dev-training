const fs = require('fs')
const path = require('path')

const dataHandler = require('../modules/dataHandler.js')


function serveHTML(fileName, statusCode, res) {
    const filePath = path.join(__dirname, '../public', fileName)
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/html;  charset=utf-8')
            return res.end('تعذر تحميل الصفحة...')
        }
        res.statusCode = statusCode
        res.setHeader('Content-Type', 'text/html;  charset=utf-8')
        return res.end(data)
    })
}

const router = (req, res) => {


    if (req.url === '/home' && req.method === 'GET') {
        return serveHTML('index.html', 200, res)
    }
    else if (req.url === '/about' && req.method === 'GET') {
        return serveHTML('about.html', 200, res)
    }
    else if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json;  charset=utf-8')
        const users = dataHandler.getUsers();
        res.statusCode = 200
        return res.end(JSON.stringify(users))

    } else if (req.url.startsWith('/api/user?id=') && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json;  charset=utf-8')
        const urlParams = new URL(req.url, `http://${req.headers.host}`)
        const userId = urlParams.searchParams.get('id')
        const user = dataHandler.getUserById(userId)

        if (user) {
            res.statusCode = 200
            return res.end(JSON.stringify(user))
        } else {
            res.statusCode = 404
            return res.end(JSON.stringify({ error: 'المستخدم غير موجود ' }))
        }
    } else if (req.url === '/api/users' && req.method === 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            try {
                const newUserData = JSON.parse(body)
                if (!newUserData.name || !newUserData.email) {
                    res.statusCode = 400
                    return res.end(JSON.stringify({ error: 'الاسم والايميل مطلوبان ' }))
                }

                const addUser = dataHandler.addUser(newUserData)
                res.statusCode = 200
                return res.end(JSON.stringify({ message: 'تم إضافة المستخدم بنجاح', user: addUser }))
            } catch (error) {
                res.statusCode = 400
                return res.end(JSON.stringify({ error: 'صيغة JSON تالفة' }))
            }
        })
        return;
    }
    else {
        return serveHTML('404.html', 404, res)
    }

}

module.exports = router
