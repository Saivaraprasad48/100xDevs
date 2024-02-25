/* eslint-disable react/prop-types */
export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left pt-2 pl-1">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-3 border rounded border-slate-200"
      />
    </div>
  );
}
