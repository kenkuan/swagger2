import * as compiler from './compiler';
import * as document from './document';
import * as schema from './schema';
import * as validate from './validate';
export declare const loadDocumentSync: typeof document.loadDocumentSync;
export declare const validateDocument: typeof document.validateDocument;
export declare const validateRequest: typeof validate.request;
export declare const validateResponse: typeof validate.response;
export declare const compileDocument: typeof compiler.compile;
export import Compiled = compiler.Compiled;
export import Document = schema.Document;
