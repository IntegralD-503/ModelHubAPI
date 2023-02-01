const dynamoose = require("dynamoose");

const MLModelSchema = new dynamoose.Schema(
    {
        id: {
            type: String,
            hashKey: true,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ""
        }
    },
    {
        timestamps: {
            createdAt: 'CreateDate',
            updatedAt: 'UpdateDate' 
        }
    }
);

module.exports = dynamoose.model(process.env.DYNAMODB_TABLE, MLModelSchema);