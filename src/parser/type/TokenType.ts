enum TokenType {
	// \n
	LineBreak = 'line_break',

	// ?
	Optional = '?',
	// +
	Mutiple = '+',

	// group
	Group = 'group',
	// {
	GroupStart = '{',
	// }
	GroupEnd = '}',
	// !
	Anonymous = '!',

	// (
	ArgStart = '(',
	// ,
	Comma = ',',
	// )
	ArgEnd = ')',

	// match
	Match = 'match',

	// if
	If = 'if',
	// else
	Else = 'else',

	// define
	Define = 'define',

	// Name
	Name = 'name',

	// Text
	LiteralString = 'literal_string',
	// Number
	LiteralNumber = 'literal_number'
}

export default TokenType