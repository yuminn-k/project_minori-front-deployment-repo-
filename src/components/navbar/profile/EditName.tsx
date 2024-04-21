import {errorProps} from '@/src/interfaces/error';
import {useState} from 'react';

const EditName = ({setIsOpen, func}: errorProps) => {
  const [rename, setRename] = useState<string>('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRename(e.target.value);
  };

  const handleClickSave = () => {
    func(rename);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className=" bg-white rounded-lg w-[400px] h-[250px] py-[30px] box-border flex text-center items-center"
        id="modal-container"
      >
        <div className="w-full h-[160px]">
          <div className="h-[60px] flex justify-center items-center text-3xl">
            EditName
          </div>
          <div className="h-[50px]">
            <input
              type="text"
              className="p-[10px] border"
              placeholder="Nickname"
              onChange={handleChangeName}
            />
          </div>
          <div className="h-[50px] flex justify-center items-end">
            <button
              className="bg-blue-500 text-white py-2 px-3 rounded text-sm font-medium mx-2"
              onClick={handleClickSave}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white py-2 px-3 rounded text-sm font-medium mx-2"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditName;
