// 引入 MongoDB 的 Node.js 驅動程式 (使用 ES Module 的 `import`)
import { MongoClient } from 'mongodb';

// MongoDB 的連接 URI，替換為你的 MongoDB 伺服器地址
const uri = "mongodb://localhost:27017"; // 修改為你的 MongoDB 連接 URL

// 創建 MongoClient 客戶端
const client = new MongoClient(uri);

async function fetchStudents() {
    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        // 指定資料庫與集合
        const database = client.db("411630154");
        const collection = database.collection("studentslist");

        // 查詢所有學生的名單
        const students = await collection.find().toArray();

        // 顯示學生名單
        console.log("學生名單:");
        students.forEach(student => {
            console.log(student);
        });

    } catch (error) {
        console.error("查詢過程中發生錯誤:", error);
    } finally {
        // 關閉連接
        await client.close();
        console.log("已關閉 MongoDB 連接");
    }
}

// 呼叫函數
fetchStudents();
