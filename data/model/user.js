import { katalkDB } from "../../db/database.js";
import {Model} from "sequelize";
import SQ from 'sequelize'
const DataType = SQ.DataTypes;

export class Users extends Model{}

Users.init({
    id:{
        autoIncrement: true,
        type: DataType.INTEGER,
        primaryKey: true,

    },
    name:{
        type: DataType.TEXT,
        allowNull: false
    },
    phone:{
        type: DataType.TINYINT,
        allowNull: false
    },
    userId:{
        type: DataType.INTEGER,
        allowNull: false
    },
    userPassword:{
        type: DataType.TEXT,
        allowNull: false
    },
    profile:{
        type: DataType.TEXT,
        allowNull: true
    },
    friendId:{
        type: DataType.JSON,
        allowNull: true
    }
},{
    sequelize: katalkDB,
    timestamps: false
});