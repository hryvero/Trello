const { Schema, model } = require("mongoose");



const TaskSchema = new Schema(
      {
        title: { type: String, trim: true, required: true },
        column: {
          type: Schema.Types.ObjectId,
          ref: 'Column'
        }
      },
      { timestamps: true, virtuals: true, versionKey: false },
      { typeKey: '$type' }
    );

    TaskSchema.set('toJSON', { virtuals: true });
    TaskSchema.set('toObject', { virtuals: true });
    

    module.exports=model("Task", TaskSchema);

