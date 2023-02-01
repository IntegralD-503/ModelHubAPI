const MLModel = require('../models/MLModel');

// @desc    Get all ML models
// @route   GET /api/v0/models
// @access  Public
exports.getModels = async (req, res, next) => {

    try {
        const mlModel = await MLModel.get("1")
        console.log(mlModel);
        res.status(200).json({
            success: true,
            data: mlModel
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            err: err.stack
        })
    }
}