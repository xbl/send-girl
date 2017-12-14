<template>
  <div class="editor" ref="editorDom"></div>
</template>

<script>
import { noop } from 'lodash';
import CodeMirror from 'codemirror/lib/codemirror';

import 'codemirror/mode/meta';
import 'codemirror/mode/brainfuck/brainfuck';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/cmake/cmake';
import 'codemirror/mode/coffeescript/coffeescript';
import 'codemirror/mode/commonlisp/commonlisp';
import 'codemirror/mode/css/css';
import 'codemirror/mode/d/d';
import 'codemirror/mode/diff/diff';
import 'codemirror/mode/eiffel/eiffel';
import 'codemirror/mode/fortran/fortran';
import 'codemirror/mode/gherkin/gherkin';
import 'codemirror/mode/go/go';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/idl/idl';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/lua/lua';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/mathematica/mathematica';
import 'codemirror/mode/mllike/mllike';
import 'codemirror/mode/nsis/nsis';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/php/php';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/properties/properties';
import 'codemirror/mode/protobuf/protobuf';
import 'codemirror/mode/puppet/puppet';
import 'codemirror/mode/python/python';
import 'codemirror/mode/q/q';
import 'codemirror/mode/rpm/rpm';
import 'codemirror/mode/rst/rst';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/scheme/scheme';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/smarty/smarty';
import 'codemirror/mode/soy/soy';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/stex/stex';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/tcl/tcl';
import 'codemirror/mode/toml/toml';
import 'codemirror/mode/troff/troff';
import 'codemirror/mode/ttcn-cfg/ttcn-cfg';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/vbscript/vbscript';
import 'codemirror/mode/verilog/verilog';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/yaml/yaml';

import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/match-highlighter';
import 'codemirror/addon/scroll/annotatescrollbar';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/edit/trailingspace';
import 'codemirror/addon/mode/overlay';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/dialog/dialog.css';

CodeMirror.requireMode = noop;
CodeMirror.autoLoadMode = noop;
let editorCM;
export default {
  name: 'editor',
  props: {
    mode: String,
    value: String,
    readOnly: Boolean,
  },
  data() {
    return {
      valueText: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.valueText = newValue;
      editorCM.setValue(this.valueText || '');
    },
    mode(newValue) {
      editorCM.setOption('mode', newValue);
    },
    readOnly(newValue) {
      editorCM.setOption('readOnly', newValue);
    },
  },
  mounted() {
    editorCM = CodeMirror(this.$refs.editorDom, {
      value: '',
      readOnly: this.readOnly || false,
      lineNumbers: true,
    });
  },
  // updated() {
  //   // this.valueText = 'abc';
  //   editorCM.getDoc().setValue('dddddddddd');
  //   setTimeout(() => {
  //     editorCM.setValue('abc');
  //   }, 5000);
  // },
};
</script>

<style scoped>
.editor{ text-align: left; width: 100%; overflow: hidden; }
</style>
