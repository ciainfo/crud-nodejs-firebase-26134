export const createCategory = (req, res) => {
    const { title } = req.body;
    res.json({
        message: `Categoría creada: ${title}`,
    });
};

export const getCategories =(req, res) => {
    res.json({
        message: "Listado de las categorías", 
    });
};

export const getCategoryById = (req, res) => {
    const { id } = req.params;
    res.status(201).json({
        message: `Categoría con id ${id}`,
    });
};

export const updateCategory = (req, res) => {
    const { id } = req.params;
    /*if (id != 1) {
        return res.status(404).json({
            message: "Categoría no encontrada",
        });
    }
    */
    const { title } = req.body; 
    if (!title) {
        return res.status(422).json({
            message: "El campo 'title' es requerido",
        });
    }
    res.json({
        message: `Categoría actualizada: ${title} (ID: ${id})`,
    });
};

export const deleteCategory = (req, res) => {
    const { id } = req.params;
    /*if (id != 1) {
        return res.status(404).json({
            message: "Categoría no encontrada",
        });
    }
    */
    res.json({
        message: `Categoría eliminada (ID: ${id})`,
    });
};
