module.exports = {
    register: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Usuario Registrado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en Register'
            })
        }
    },
    login: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Usuario logueado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en Login'
            })
        }
    },
    checked : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Usuario checkeado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en Checked'
            })
        }
    },
    sendToken : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Token Enviado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en sendToken'
            })
        }
    },
    verifyToken : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Token Verificado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en verifyToken'
            })
        }
    },
    changePassword : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Password actualizado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en changePassword'
            })
        }
    },
}