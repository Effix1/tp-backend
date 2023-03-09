const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff')
  // ******************************   création *****************************************

router.post('/', stuffCtrl.createThing);
  // ******************************   modification *****************************************
  router.put("/:id",stuffCtrl.modifyThing);
  // ******************************   supréssion *****************************************

  router.delete('/:id',stuffCtrl.deleteThing);
  // ******************************   choisir un objet *****************************************

  router.get('/:id',stuffCtrl.getOneThing);
  // ******************************   choisir tous les objets *****************************************

  router.get('/',stuffCtrl.getAllThings );

module.exports = router;