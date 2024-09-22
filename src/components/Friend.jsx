import { useState } from "react";

export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Saya berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang Rp{Math.abs(friend.balance)} ke Saya
        </p>
      )}
      {friend.balance === 0 && <p>Saya dan {friend.name} tidak ada hutang</p>}
      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
