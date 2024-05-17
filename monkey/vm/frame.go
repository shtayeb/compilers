package vm

import (
	"github.com/shtayeb/compilers/monkey/code"
	"github.com/shtayeb/compilers/monkey/object"
)

type Frame struct {
	fn *object.CompiledFunction
	ip int
}

func NewFrame(fn *object.CompiledFunction) *Frame {
	return &Frame{fn: fn, ip: -1}
}

func (f *Frame) Instructions() code.Instructions {
	return f.fn.Instructions
}
