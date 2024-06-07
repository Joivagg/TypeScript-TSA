import path from 'path'
import keygen from 'ssh-keygen-lite'

export const getRSAKeys = keygen(
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
        return {
            privKey: out.key,
            pubKey: out.pubKey
        }
    }
).catch(
    (err) => {
        return {
            error: err
        }
    }
)