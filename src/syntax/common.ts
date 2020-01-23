import { default as palette } from "../palette";

let dark = palette.paletteDark;
let light = palette.paletteLight;

export const darkCommon = [
  {
    name: "Keyword",
    scope:
      "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
    settings: {
      foreground: dark.red
    }
  },
  {
    name: "Debug",
    scope: "keyword.other.debugger",
    settings: {
      foreground: dark.red
    }
  },
  {
    name: "Storage",
    scope:
      "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
    settings: {
      foreground: dark.orange
    }
  },
  {
    name: "Operator",
    scope: "keyword.operator",
    settings: {
      foreground: dark.orange
    }
  },
  {
    name: "String",
    scope:
      "string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
    settings: {
      foreground: dark.yellow
    }
  },
  {
    name: "Attribute",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: dark.yellow
    }
  },
  {
    name: "String Escape",
    scope:
      "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
    settings: {
      foreground: dark.green
    }
  },
  {
    name: "Function",
    scope:
      "entity.name.function, support.function, meta.function, meta.function-call, entity.name.function, meta.definition.method",
    settings: {
      foreground: dark.green
    }
  },
  {
    name: "Preproc",
    scope:
      "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
    settings: {
      foreground: dark.aqua
    }
  },
  {
    name: "Annotation",
    scope: "storage.type.annotation",
    settings: {
      foreground: dark.aqua
    }
  },
  {
    name: "Label",
    scope: "entity.name.label, constant.other.label",
    settings: {
      foreground: dark.aqua
    }
  },
  {
    name: "Modules",
    scope:
      "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
    settings: {
      foreground: dark.aqua
    }
  },
  {
    name: "Type",
    scope: "storage.type, support.type, entity.name.type, keyword.type",
    settings: {
      foreground: dark.blue
    }
  },
  {
    name: "Class",
    scope:
      "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
    settings: {
      foreground: dark.blue
    }
  },
  {
    name: "Number",
    scope: "constant.numeric",
    settings: {
      foreground: dark.purple
    }
  },
  {
    name: "Boolean",
    scope: "constant.language.boolean",
    settings: {
      foreground: dark.purple
    }
  },
  {
    name: "Macro",
    scope: "entity.name.function.preprocessor",
    settings: {
      foreground: dark.purple
    }
  },
  {
    name: "Special identifier",
    scope:
      "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special",
    settings: {
      foreground: dark.purple
    }
  },
  {
    name: "Constant",
    scope: "constant.language, support.constant",
    settings: {
      foreground: dark.purple
    }
  },
  {
    name: "Identifier",
    scope: "variable, support.variable, meta.definition.variable",
    settings: {
      foreground: dark.fg
    }
  },
  {
    name: "Property",
    scope:
      "variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key",
    settings: {
      foreground: dark.fg
    }
  },
  {
    name: "Delimiter",
    scope: "punctuation, meta.brace, meta.delimiter, meta.bracket",
    settings: {
      foreground: dark.fg
    }
  },
  {
    name: "Comment",
    scope: "comment, string.comment, punctuation.definition.comment",
    settings: {
      foreground: dark.grey1,
      fontStyle: "italic"
    }
  }
];
export const lightCommon = [
  {
    name: "Keyword",
    scope:
      "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
    settings: {
      foreground: light.red
    }
  },
  {
    name: "Debug",
    scope: "keyword.other.debugger",
    settings: {
      foreground: light.red
    }
  },
  {
    name: "Storage",
    scope:
      "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
    settings: {
      foreground: light.orange
    }
  },
  {
    name: "Operator",
    scope: "keyword.operator",
    settings: {
      foreground: light.orange
    }
  },
  {
    name: "String",
    scope:
      "string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
    settings: {
      foreground: light.yellow
    }
  },
  {
    name: "Attribute",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: light.yellow
    }
  },
  {
    name: "String Escape",
    scope:
      "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
    settings: {
      foreground: light.green
    }
  },
  {
    name: "Function",
    scope:
      "entity.name.function, support.function, meta.function, meta.function-call, entity.name.function, meta.definition.method",
    settings: {
      foreground: light.green
    }
  },
  {
    name: "Preproc",
    scope:
      "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
    settings: {
      foreground: light.aqua
    }
  },
  {
    name: "Annotation",
    scope: "storage.type.annotation",
    settings: {
      foreground: light.aqua
    }
  },
  {
    name: "Label",
    scope: "entity.name.label, constant.other.label",
    settings: {
      foreground: light.aqua
    }
  },
  {
    name: "Modules",
    scope:
      "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
    settings: {
      foreground: light.aqua
    }
  },
  {
    name: "Type",
    scope: "storage.type, support.type, entity.name.type, keyword.type",
    settings: {
      foreground: light.blue
    }
  },
  {
    name: "Class",
    scope:
      "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
    settings: {
      foreground: light.blue
    }
  },
  {
    name: "Number",
    scope: "constant.numeric",
    settings: {
      foreground: light.purple
    }
  },
  {
    name: "Boolean",
    scope: "constant.language.boolean",
    settings: {
      foreground: light.purple
    }
  },
  {
    name: "Macro",
    scope: "entity.name.function.preprocessor",
    settings: {
      foreground: light.purple
    }
  },
  {
    name: "Special identifier",
    scope:
      "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special",
    settings: {
      foreground: light.purple
    }
  },
  {
    name: "Constant",
    scope: "constant.language, support.constant",
    settings: {
      foreground: light.purple
    }
  },
  {
    name: "Identifier",
    scope: "variable, support.variable, meta.definition.variable",
    settings: {
      foreground: light.fg
    }
  },
  {
    name: "Property",
    scope:
      "variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key",
    settings: {
      foreground: light.fg
    }
  },
  {
    name: "Delimiter",
    scope: "punctuation, meta.brace, meta.delimiter, meta.bracket",
    settings: {
      foreground: light.fg
    }
  },
  {
    name: "Comment",
    scope: "comment, string.comment, punctuation.definition.comment",
    settings: {
      foreground: light.grey1,
      fontStyle: "italic"
    }
  }
];
