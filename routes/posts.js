const express = require("express");
const router = express.Router();
const db = require("../database/instagram");

router.get("/", async function (req, res, next) {
  //Get data from database
  const result = await db.getAllPost();
  const output = {
    count: result.rowCount,
    data: result.rows,
  };
  res.json(output);
});

router.get("/:id", async function (req, res, next) {
  //Get data from database
  const result = await db.getPostById(req.params.id);
  
  if (!result){
    res
    .status(500)
    .json({ status: `Error occured during database query` });
    return;
  }

  if (result.rowCount > 0) {
    const output = {
      data: result.rows[0],
    };
    res.json(output);
  }else {
    res
      .status(404)
      .json({ status: `Not found id:${req.params.id} on database` });
  }

});

router.get("/search/shortcode/:shortcode", async function (req, res, next) {
  //Get data from database
  const result = await db.getPostByShortcode(req.params.shortcode);

  if (!result){
    res
    .status(500)
    .json({ status: `Error occured during database query` });
  }

  if (result.rowCount > 0) {
    const output = {
      data: result.rows[0],
    };
    res.json(output);
  }else {
    res
      .status(404)
      .json({ status: `Not found shortcode:${req.params.shortcode} on database` });
  }
});

// Insert new post to db
router.post("/", async function (req, res, next) {
  await db.insertPost(req.body);
  const output = {
    status: "inserted",
    data: req.body,
  };
  res.json(output);
});

module.exports = router;
