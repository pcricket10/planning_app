import express from "express";

const router = express.Router();

router.post('/planner', (req
  , res) => {
  // {req.body: {start: dt, end: dt, travelers: int, interests: arr, activity: str[], maxBudget: int }}
  //  iterate and validate. catch => return error
  // build out a query string (per OpenAI API documation)
  // TODO: Create + Ignore .config
  // POST to OpenAI API (Axios?)
  // Format response + send
})
