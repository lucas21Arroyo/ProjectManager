module.exports = {
    list: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Lista de Proyectos'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en project-list'
            })
        }
    },
    store : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Proyecto Guardado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en store-project'
            })
        }
    },
    detail : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Detalle del Proyecto'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en project-detail'
            })
        }
    },
    update : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Proyecto Actualizado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en proyect-update'
            })
        }
    },
    remove : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Proyecto Eliminado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en project-remove'
            })
        }
    },
    addCollaborator : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Colaborador Agregado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en collaborator-add'
            })
        }
    },
    removeCollaborator : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Colaborador Eliminado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Upss, hubo un error en collaborator-remove'
            })
        }
    },
    
}