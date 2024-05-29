module.exports = {
    list: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Lista de Tareas'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en tasks-list'
            })
        }
    },
    store : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tareas Guardadas'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en store-task'
            })
        }
    },
    detail : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Detalle de la Tarea'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en task-detail'
            })
        }
    },
    update : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea Actualizada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en task-update'
            })
        }
    },
    remove : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Tarea Eliminada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en task-remove'
            })
        }
    },
    changeState : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Tarea Completada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en change-state'
            })
        }
    },
    
}