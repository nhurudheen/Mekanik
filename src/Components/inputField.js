const InputField = ({placeholder,inputType, inputName}) => {
    return (
    <div>
        <input type={inputType} name={inputName} className="w-full rounded border border-[#FFFFFF8] text-offWhite text-xs px-5 py-3  focus:text-black focus:outline-none focus:border-[#00000050]" placeholder={placeholder} />
    </div>
    );
}

export default InputField;