const dataHandler = requier('../modules/dataHandler.js')


const router = (req, res) => {
    res.setHeader('Content-Type', 'applicstion/json')

    if (req.url === '/api/users' && req.method === 'GET') {
        const users = dataHandler.getUsers();
        res.statusCode = 200
        return res.end(JSON.stringify(users))

    } else if (req.url.startsWith('/api/user?id=') && req.method === 'GET') {
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
    } else {
        res.statusCode = 404
        return res.end(JSON.stringify({ eroor: 'المسار غير موجود ' }))
    }
}

modulr.export = router
