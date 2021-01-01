// Shell
while True then

    input = user_input()

end while

// ------------------
// Basic

DIGITS = "0123456789"

// Tokens
TT_INT = "INT"
TT_FLOAT = "FLOAT"
TT_PLUS = "PLUS"
TT_MINUS = "MINUS"
TT_MUL = "MUL"
TT_DIV = "DIV"
TT_LPAREN = "LPAREN"
TT_RPAREN = "RPAREN"

TokenClass = {}
TokenClass.type = null
TokenClass.value = null

newToken = function(type, value)
    obj = new Token
    obj.type = type
    obj.value = value

    return obj
end function

// Lexer
LexerClass = {}
LexerClass.text = null
LexerClass.pos = 0
LexerClass.current_char = null

LexerClass.advance = function()
    self.pos = self.pos + 1
    if self.pos < self.text.len then
        self.current_char = self.text[pos]
    end if
end function

LexerClass.make_tokens = function()
    tokens = []

    while self.current_char != null then
        if self.current_char == " " or self.current_char == "" then
            self.advance()
        else

        end if
    end while
end function