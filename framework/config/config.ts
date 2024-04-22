import 'dotenv/config'

const config = {
    login: process.env.LOGIN ?? '',
    password: process.env.PASSWORD ?? '',
}

export default Object.freeze(config)