import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : ""; // Ubah dari " " menjadi ""
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    // Tambahkan e sebagai parameter
    e.preventDefault(); // Panggil e.preventDefault() dengan benar

    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? Number(friendBill) : -Number(myBill)); // Pastikan myBill dan friendBill dikonversi ke angka
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng {selectedFriend.name}</h2>

      <label htmlFor="">💵 Total Biaya</label>
      <input
        type="number" // Mengubah type input ke number
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))} // Konversi ke number
      />

      <label htmlFor="">👧 Tagihan Saya</label>
      <input
        type="number" // Mengubah type input ke number
        value={myBill}
        onChange={(e) => setMyBill(Number(e.target.value))} // Konversi ke number
      />

      <label htmlFor="">👦 Tagihan si {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">👩‍💻 Ditalangin sama</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">Saya</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
