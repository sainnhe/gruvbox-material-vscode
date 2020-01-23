import { Palette } from "../interface";

export function getCommonSyntax(palette: Palette) {
  return [
    {
      name: "Keyword",
      scope:
        "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Debug",
      scope: "keyword.other.debugger",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Storage",
      scope:
        "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
      settings: {
        foreground: palette.orange
      }
    },
    {
      name: "Operator",
      scope: "keyword.operator",
      settings: {
        foreground: palette.orange
      }
    },
    {
      name: "String",
      scope:
        "string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "String Escape",
      scope:
        "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Function",
      scope:
        "entity.name.function, support.function, meta.function, meta.function-call, entity.name.function, meta.definition.method",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Preproc",
      scope:
        "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
      settings: {
        foreground: palette.aqua
      }
    },
    {
      name: "Annotation",
      scope: "storage.type.annotation",
      settings: {
        foreground: palette.aqua
      }
    },
    {
      name: "Label",
      scope: "entity.name.label, constant.other.label",
      settings: {
        foreground: palette.aqua
      }
    },
    {
      name: "Modules",
      scope:
        "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
      settings: {
        foreground: palette.aqua
      }
    },
    {
      name: "Type",
      scope: "storage.type, support.type, entity.name.type, keyword.type",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Class",
      scope:
        "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: palette.purple
      }
    },
    {
      name: "Boolean",
      scope: "constant.language.boolean",
      settings: {
        foreground: palette.purple
      }
    },
    {
      name: "Macro",
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: palette.purple
      }
    },
    {
      name: "Special identifier",
      scope:
        "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special",
      settings: {
        foreground: palette.purple
      }
    },
    {
      name: "Constant",
      scope: "constant.language, support.constant",
      settings: {
        foreground: palette.purple
      }
    },
    {
      name: "Identifier",
      scope: "variable, support.variable, meta.definition.variable",
      settings: {
        foreground: palette.fg
      }
    },
    {
      name: "Property",
      scope:
        "variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key",
      settings: {
        foreground: palette.fg
      }
    },
    {
      name: "Delimiter",
      scope: "punctuation, meta.brace, meta.delimiter, meta.bracket",
      settings: {
        foreground: palette.fg
      }
    },
    {
      name: "Comment",
      scope: "comment, string.comment, punctuation.definition.comment",
      settings: {
        foreground: palette.grey1,
        fontStyle: "italic"
      }
    }
  ];
}
