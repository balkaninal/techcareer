const Joi = require('@hapi/joi')


//Register Validation
const userValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string(),
        ///dev allow """"
        email:Joi.string().email().required().allow("").allow(" "),
        ////
        username:Joi.string().required(),
        password:Joi.string().required(),
        dateOfBirth: Joi.date(),
        mobile: Joi.string().min(10).required(),
        isAdmin:Joi.string(),
        isDonor:Joi.string(),
        isWaiting:Joi.string().optional().allow("").allow(" "),
        waitingFor:Joi.array().optional(),
        donorFor:Joi.array().optional(),

    })

    return schema.validate(data)
    
}



//Update Validation
const updateValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string(),
        dateOfBirth: Joi.date(),
        mobile: Joi.string().min(10),
        homeMobile: Joi.string().optional().allow("").allow(" ").min(7),
        medicines:Joi.array(),
        email:Joi.string().email().optional().allow("").allow(" ")
        

    })

    return schema.validate(data)
}


const postValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string(),
        title: Joi.string().required().min(5).max(60).messages({
            "string.empty":"Başlık alanı boş bırakılamaz",
            "string.min":"Başlık en az 5 en fazla 55 karakter olmalı",
            "string.max":"Başlık en az 5 en fazla 55 karakter olmalı",
            "any.required":"Baslik Boş Bırakılammaz"
        }),
        mobile: Joi.string().required().min(10).max(10).messages({
            "string.empty":"Telefon Numarasi boş bırakılamaz",
            "string.min":"Telefon numarasini basinda 0 olmayacak sekilde yazin",
            "string.max":"Telefon numarasini basinda 0 olmayacak sekilde yazin",
            "any.required":"Telefon numarasi Boş Bırakılammaz"
        }),
        publisher: Joi.string().required(),
        desc: Joi.string().required().min(10).max(256).messages({
            "string.empty":"Başlık boş bırakılamaz",
            "string.min":"Açıklama kısmı 5-256 karakter olmalı",
            "string.max":"Açıklama kısmı 5-60 karakter olmalı",
            "any.required":"Açıklama Kısmı boş Bırakılammaz"
        }),
        kind: Joi.string().required().messages({
            "string.empty":"Donor / Bekleme listesi seçimi zorunludur",
            "any.required":"Donor / Bekleme listesi seçimi zorunludur"
        }),
        type: Joi.string().required().messages({
            "string.empty":"Bağış türü seçimi zorunludur",
            "any.required":"Bağış türü seçimi zorunludur"
        }),
        blood: Joi.string(),
        city: Joi.string(),
        organ: Joi.string(),

        


    })

    return schema.validate(data)
}
module.exports={userValidation,updateValidation,postValidation}