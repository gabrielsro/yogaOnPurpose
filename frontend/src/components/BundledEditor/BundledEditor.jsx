import "./BundledEditor.css";
import { Editor } from "@tinymce/tinymce-react";
//Required components for bundling:
import tinymce from "tinymce"; //eslint-disable-line no-unused-vars
import "tinymce/models/dom/model";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import "tinymce/skins/ui/oxide/skin.min.css";
//plugins:
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/image";
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/template";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";
//plugin resources:
import "tinymce/plugins/emoticons/js/emojis";

const BundledEditor = (props) => {
  const { init, ...rest } = props;
  return (
    <Editor
      init={{ ...init, skin: false, content_css: false }}
      {...rest}
      className="bundledEditor"
    />
  );
};
export default BundledEditor;
