
const Header = () => {
  return (
    <div className="flex justify-end items-center pr-11 py-4 bg-white border-b border-[#848484]">
      <div className="flex items-center gap-4">
        <img src="/bell.png" alt="Notification" />
        <img src="/person.jpeg" alt="Profile" className="h-10 w-10 rounded-full" />
        <div className="flex gap-5 items-start">
          <div>
          <p className="text-[#303030] font-semibold text-sm">John Doe</p>
          <p className="text-[#848484] text-sm font-normal">Manager</p>
          </div>
          <img src="/dropdown.png" alt="Down Arrow" />
        </div>
      </div>
    </div>
  )
}

export default Header