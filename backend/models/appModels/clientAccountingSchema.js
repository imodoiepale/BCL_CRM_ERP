// clientAccountingSchema.js
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const documentSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  file: {
    type: String,
    trim: true,
    required: true,
  },
  // Add other fields as needed, e.g., uploadedBy, uploadDate, etc.
});

const clientAccountingSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  kraPin: {
    type: String,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: true,
  },
  signaturePhoto: {
    type: String,
    trim: true,
  },
  nhifNumber: {
    type: String,
    trim: true,
    required: true,
  },
  idPassportNumber: {
    type: String,
    trim: true,
    required: true,
  },
  companyName: {
    type: String,
    trim: true,
    required: true,
  },
  documents: [documentSchema],
  // ... other fields
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ClientAccounting', clientAccountingSchema);
