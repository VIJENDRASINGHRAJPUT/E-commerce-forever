import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false })
//minimize false islie kia h kuki mongoose empty obj ki entry db me
// nahi bnata magr humko cartData ki entry chiye db wo empty ho fir bhi

const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel