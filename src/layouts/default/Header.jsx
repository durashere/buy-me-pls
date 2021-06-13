const Header = ({ setEditMode }) => {
  const handleToggleEditMode = () => {
    setEditMode((editMode) => !editMode);
  };

  return (
    <div className="grid grid-cols-3 text-lg text-center bg-white shadow-md">
      <span className="col-start-2 py-4 text-gray-600">~ Buy me pls ~</span>
      <button
        type="button"
        className="p-4 material-icons-outlined justify-self-end focus:outline-none"
        onClick={handleToggleEditMode}
      >
        mode_edit
      </button>
    </div>
  );
};

export default Header;
