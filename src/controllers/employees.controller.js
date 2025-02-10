import { pool } from "../db.js";

export const getHome = (req, res) => {
        res.send("HOLA MUNDO")
        };

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: " Error ",
        });
    }
};

export const getEmployee = async (req, res) => {
    try {
        const employee = req.params.id;
        const [rows] = await pool.query("SELECT * FROM employee where id=?", [
            employee,
        ]);

        if (rows.length <= 0) {
            return res.status(404).json({
                message: "Employee Not Found",
            });
        }
        console.log(rows);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: " Error ",
        });
    }
};

export const createEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO employee (name,salary) values ( ?,? ) ",
            [name, salary]
        );

        res.send({
            id: rows.insertId,
            name,
            salary,
        });
    } catch (error) {
        return res.status(500).json({
            message: " Error ",
        });
    }
};

export const deleteEmployees = async (req, res) => {
    try {
        const employee = req.params.id;
        const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
            employee,
        ]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Employe No encontrado",
            });
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: " Error ",
        });
    }
};

export const updateEmployees = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;
        const [result] = await pool.query(
            "UPDATE employee SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=IFNULL(?,id)",
            [name, salary, id]
        );
        console.log(result);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "No se encontro Empleado a actualizar",
            });
        }

        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
            id,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: " Error ",
        });
    }
};
