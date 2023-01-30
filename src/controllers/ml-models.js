// @desc    Get all ML models
// @route   GET /api/v0/models
// @access  Public
exports.getModels = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Fetch all models'
    })
}