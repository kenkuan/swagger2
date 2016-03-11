// schema.ts

/*
 * Type definitions for Swagger 2.0 schema, only the minimal set required for validation
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

export type ParameterType = 'query' | 'path' | 'body';
export type DataType = 'string' | 'number' | 'integer' | 'boolean';
export type DataFormat = 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password';

export interface Definition {
  '$ref'?: string;
  type?: DataType;
  format?: DataFormat;
  schema?: any;
  required?: boolean;
}

//noinspection ReservedWordAsName
export interface Parameter extends Definition {
  name?: string;
  in?: ParameterType;
  description?: string;
}

export interface Response extends Definition {
  description: string;
  headers?: any;
  examples?: any;
}

export interface Operation {
  summary?: string;
  operationId?: string;
  description?: string;
  tags?: string[];
  produces?: string[];
  parameters?: Parameter[];
  responses: { [ statusCode: string ]: Response };
}

export interface Path {
  [ method: string ]: Operation; // method = 'get' | 'post' | 'put' | 'delete' | 'patch';
}

export interface License {
  name: string;
  url?: string;
}

export interface Contact {
  name: string;
  email: string;
  url: string;
}

export interface Info {
  title: string;
  version: string;
  license?: License;
  contact?: Contact;
  description?: string;
  termsOfService?: string;
}

export interface Document {
  swagger: '2.0';
  info: Info;
  basePath?: string;
  host?: string;
  schemes?: string[];
  consumes?: string[];
  produces?: string[];
  paths: { [ path: string ]: Path };
  definitions?: any;
}
