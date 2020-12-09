import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// // GET/comments/:taskid
router.get("/:taskid", async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();
        res.json(task.comments);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

router.post("/", async (req, res) => {
    try {
        const query = Task.findById(req.body.taskid);
        const task = await query.exec();
        const comment = {
            id: Math.random().toString(36).substr(2, 36),
            comment: req.body.comment,
            createdAt: new Date(),
        };

        task.comments.push(comment);
        const newTask = await task.save();
        res.json(newTask);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

// // DELETE/ comments/:commentid/:taskid
router.delete("/:commentid/:taskid", async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();

        let updatedComments = task.comments.filter((comment) => {
            return comment.id != req.params.commentid;
        });

        task.comments = updatedComments;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

export default router;
