import express from "express";

const router = express.Router(); // What does this method do?

// GET/ labels
router.get("/", async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();
        res.json(task.labels);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

// POST/ labels
// {
//     "title": "foo"
//     "color": "#ff0000"
// }
router.post("/", async (req, res) => {
    // const task = new Task({
    //     title: req.body.title,
    //     color: req.body.color,
    // });
    // try {
    //     const savedTask = await task.save();
    //     res.json(savedTask);
    // } catch (err) {
    //     res.json({ message: err });
    // }
});

// PATCH/ labels/:labelid
// {
//     "title": "foo"
//     "color": "#ff0000"
// }
router.patch("/:labelid", async (req, res) => {
    // try {
    //     const query = Task.findById(req.params.taskid);
    //     const task = await query.exec();
    //     task.title = req.body.title;
    //     task.labels = req.body.labels;
    //     task.description = req.body.description;
    //     await task.save();
    // } catch (err) {
    //     res.json({ message: "Something went wrong" });
    // }
});

// router.delete("/:labelid", async (req, res) => {
//     try {
//         const query = Task.findById(req.params.taskid);
//         const task = await query.exec();

//         let updatedComments = [];
//         for (let comment of task.comments) {
//             if (comment.id != req.params.commentid) {
//                 updatedComments.push(comment);
//             }
//         }

//         task.comments = updatedComments;

//         const updatedTask = await task.save();
//         res.json(updatedTask);
//     } catch (err) {
//         res.json({ message: "Something went wrong" });
//     }
// });

export default router; // How come it works for several resources?
