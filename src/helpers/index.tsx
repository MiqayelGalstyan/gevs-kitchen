import moment from "moment";

export const getIdsFromOptions = (value: any) => {
  return Array.isArray(value) ? value.map((item) => item.id) : [value.id];
};

export const getOptionsByIds = (ids: any, options: any[], isSingle: any) => {
  return Array.isArray(ids)
    ? options.length &&
        ids.map((id) => options.find((option) => option.id === parseInt(id)))
    : options.length && isSingle
    ? options.find((option) => option.id === parseInt(ids))
    : [options.find((option) => option.id === parseInt(ids))];
};

export function handleKeyPress(e) {
  const characterCode = e.key;
  if (characterCode === "Backspace") {
    return;
  }

  const characterNumber = Number(characterCode);
  if (characterNumber >= 0 && characterNumber <= 9) {
    if (e.target.value && e.target.value.length) {
      return "";
    } else if (characterNumber === 0) {
      e.preventDefault();
    }
  } else {
    e.preventDefault();
  }
}

export const handleDownload = (url, name = "", extension = ".xlsx") => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `Envelope_${name}_${moment().format("DD-MM-Y-h:mm:ss")}${extension}`
  );
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link?.click();
  link?.parentNode?.removeChild(link);
};

export const latinAlphabeticalHandler = (event) => {
  const regex = /[A-Za-z!@#$.%^&*()_|}{~">:<?/\][\\=\- ]/g;
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

export const internationalAlphabeticalsAndNumbersHandler = (event) => {
  const regex = /[A-Za-zА-Яа-я0-9!@#$.%^&*()_|}{~">:<?/\][\\=\- ]/g;
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

export const amountFormatter = (value: string): string =>
  value?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export const LSSetMultiple = (data) => {
  data.forEach((item) => {
    localStorage.setItem(item[0], item[1]);
  });
};

export const LSRemoveMultiple = (data) => {
  data.forEach((item) => {
    localStorage.removeItem(item);
  });
};

export const latinAlphabeticalAndNumericalHandler = (event) => {
  const regex = /[A-Za-z0-9!@#$.%^&*()_|}{~">:<?/\][\\=\- ]/g;
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

export const lowerCaseLatinAlphabeticalHandler = (event) => {
  const regex = /[a-z0-9!@#$.%^&*()_|}{~">:<?/\][\\=\- ]/g;
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

export const onlyAlphabeticalHandler = (event) => {
  const regex = /[A-Za-zԱ-Ֆա-ֆА-Яа-я}{~">:<?/\][\\=\- ]/g;
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

export const onlyNumericalPasteHandler = (event) => {
  const value = event.clipboardData.getData("Text");
  if (!Number.isInteger(parseInt(value))) {
    event.preventDefault();
    return false;
  }
};

export const onlyNumericalHandler = (event, allowFloat) => {
  const regex = /^[0-9]*$/g;
  const key = String.fromCharCode(
    !event.charCode ? event.which : event.charCode
  );
  if (
    allowFloat &&
    event.target.value &&
    !event.target.value.includes(".") &&
    key === "."
  ) {
    return false;
  }
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
};

//'42019703' is a Amazon prefix,which should be deleted at orders "check-in"/"registration" process
export const removeAmazonPrefix = (value) => {
  const amazonPrefix = "42019703";
  if (value.trim() === amazonPrefix) return amazonPrefix;
  const regexp = new RegExp("^42019703");
  const res = regexp.test(value);
  return res ? value.replace(amazonPrefix, "") : value;
};

export const toLocalDate = (utcData: string, returnString: boolean = false) => {
  //@TODO add logic to transform to local date(discuss with backend)
  if (!utcData) {
    return "";
  }
  let UTC = moment.utc(utcData);
  if (returnString) {
    return moment(UTC).format("MMMM D, YYYY h:mm A");
  }
  return (
    <span style={{ whiteSpace: "nowrap", margin: 0 }}>
      {moment(UTC).format("MMMM D, YYYY h:mm A")}
    </span>
  );
};

export const debounce = (func, delay) => {
  let timer;
  return function () {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
};

export const requiredWithTrim = (requiredValue: boolean = true) => ({
  validate: (value: string) =>
    requiredValue ? !!value.trim() || "This field is required" : !requiredValue,
  required: {
    value: requiredValue,
    message: "This field is required",
  },
});
export const disabledDateToYesterday = (current) => {
  return current && current < moment().subtract(1, "days");
};

export const dataUrlToFile = async (dataUrl, fileName, format = "png") => {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], fileName, { type: `image/${format}` });
};
