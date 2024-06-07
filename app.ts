import express from 'express'
import path from 'path'
import keygen from 'ssh-keygen-lite'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).json({
        result: await keygen(
            {
                // sshKeygenPath: 'ssh-keygen',
                location: path.join(__dirname, 'foo_rsa'),
                type: 'rsa',
                read: true,
                force: true,
                destroy: false,
                comment: 'joe@foobar.com',
                password: 'keypassword',
                size: '2048',
                format: 'PEM'
            }
        ).then(
            (out) => {
                return out
            }
        ).catch(
            (err) => {
                return err
            }
        )
    })
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})