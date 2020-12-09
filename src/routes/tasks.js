// Definēsim visus routes, kas saistīti ar tasks
import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// // GET/tasks/ - read and print
router.get("/", async (req, res) => {
    const query = Task.find({});
    try {
        const tasks = await query.exec();
        res.json(tasks);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

//POST/tasks/create - create a task
router.post("/", async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
    });

    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get("/:taskid", async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();
        res.json(task);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

// // PATCH/ tasks/ edit/123123

router.patch("/:taskid", async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();
        task.title = req.body.title;
        task.labels = req.body.labels;
        task.description = req.body.description;
        await task.save();
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

// // DELETE/ tasks/ delete/123123
router.delete("/:taskid", async (req, res) => {
    try {
        const query = Task.deleteOne({
            _id: req.params.taskid,
        });
        await query.exec();
        res.json({ message: "task deleted" });
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});

// // PATCH/ tasks/complete/123123

router.patch("/complete/:taskid", async (req, res) => {
    try {
        const query = Task.findById(req.params.taskid);
        const task = await query.exec();
        task.isCompleted = req.body.isCompleted;

        await task.save();
        res.json(task);
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});
export default router;
