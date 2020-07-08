const mongoose = require("mongoose");

const VLogSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    link: String,
    uniqueId: String,
    createdBy: Object,
    segments: Array,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("VLog", VLogSchema);
