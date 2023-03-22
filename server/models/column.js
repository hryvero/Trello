const { Schema, model } = require("mongoose");


const ColumnSchema = new Schema(
      {
        title: { type: String, trim: true, required: true },
        task:{type: Schema.Types.ObjectId,
          ref: 'Task'},
        order: {
          type: Number
        }
      },
      { timestamps: true, virtuals: true, versionKey: false, id: true }
    );

       
ColumnSchema.set('toJSON', { virtuals: true });
ColumnSchema.set('toObject', { virtuals: true });

    module.exports=model("Column", ColumnSchema);

