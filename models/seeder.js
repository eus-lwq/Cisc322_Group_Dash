const mongoose = require("mongoose");
const assignmentSchema = require("./assignment");

mongoose
  .connect(
    "mongodb+srv://LuChen:adminChen@cluster0.g1mgv.mongodb.net/assignments?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Seeds: Mongo Connected! :)");
  })
  .catch((err) => {
    console.log("Seeds: Mongo Connected in error :(");
    console.log(err);
  });

const assignment = [
  {
    title: "assignment1",
    linkOfReport: "",
    linkOfSlide:
      "https://res.cloudinary.com/luchen/image/upload/v1642012049/groupSixAssn/twjyakkfibpybm3n6vsj.pdf",
  },

  {
    title: "assignment2",
    linkOfReport:
      "https://res.cloudinary.com/luchen/image/upload/v1642012049/groupSixAssn/twjyakkfibpybm3n6vsj.pdf",
    linkOfSlide: "",
  },

  {
    title: "assignment3",
    linkOfReport: "",
    linkOfSlide:
      "https://res.cloudinary.com/luchen/image/upload/v1642012049/groupSixAssn/twjyakkfibpybm3n6vsj.pdf",
  },
];

assignmentSchema
  .insertMany(assignment)
  .then((req) => console.log(req))
  .catch((err) => console.log(err));
