// swagger.ts

/*
 * swagger2
 *
 * Loading, parsing and validating requests to HTTP services based on Swagger v2.0 documents
 *
 */

/*
 The MIT License

 Copyright (c) 2014-2016 Carl Ansley

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

import * as validate from './validate';
import * as document from './document';
import * as compiler from './compiler';

/* tslint:disable:no-unused-variable */
//noinspection ES6UnusedImports
import * as schema from './schema';
/* tslint:enable:no-unused-variable */

export const loadDocumentSync = document.loadDocumentSync;
export const validateDocument = document.validateDocument;
export const validateRequest = validate.request;
export const validateResponse = validate.response;
export const compileDocument = compiler.compile;

export import Compiled = compiler.Compiled;
export import Document = schema.Document;
