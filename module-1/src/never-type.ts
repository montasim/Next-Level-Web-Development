function throwError(message: string): never {
    throw new Error(message);
}

throwError('This file should not be compiled');