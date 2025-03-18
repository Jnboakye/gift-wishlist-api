import Joi from "joi";

export const addProductValidator = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    storeLink: Joi.string().required(),
});
