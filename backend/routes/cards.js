const cardRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  createCard,
  deleteCard,
  addLikeCard,
  removeLikeCard,
} = require('../controllers/cards');

const patternURL = /^((http|https):\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,6})+[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*$/;

cardRouter.get('/', getCards);

cardRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().pattern(patternURL),
  }),
}), createCard);

cardRouter.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), deleteCard);

cardRouter.put('/:id/likes', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), addLikeCard);

cardRouter.delete('/:id/likes', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), removeLikeCard);

module.exports = cardRouter;
