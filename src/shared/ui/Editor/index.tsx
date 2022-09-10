import { Fragment } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import ReactQuill from "react-quill";
import { EditorToolbar, formats, modules } from "./Toolbar";
import "react-quill/dist/quill.snow.css";

interface IEditorProps {
  name: string;
  rules?: object;
  theme?: string;
  editorFormats?: string[];
  editorModules?: object;
  toolbarVisible?: boolean;
  styles?: object;
  onChangeCB?: (value: string) => void;
}

const Editor = ({
  name,
  rules,
  theme = "snow",
  editorFormats = formats,
  editorModules = modules,
  toolbarVisible = true,
  onChangeCB,
}: IEditorProps): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleChange = (
    content: string,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    onChangeCB ? onChangeCB(content) : field.onChange(content);
  };

  return (
    <Fragment>
      {toolbarVisible && <EditorToolbar />}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <ReactQuill
            theme={theme}
            {...field}
            modules={editorModules}
            formats={editorFormats}
            value={field?.value || ""}
            onChange={(content: string) => handleChange(content, field)}
          />
        )}
      />
    </Fragment>
  );
};

export default Editor;
