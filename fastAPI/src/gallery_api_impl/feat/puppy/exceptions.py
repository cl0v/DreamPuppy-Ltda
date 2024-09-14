class PuppyException(Exception):
    def __init__(self, message: str, status_code: int, puppy_id: int | None):
        self.message = message
        self.id = puppy_id
        self.status_code = status_code


class PuppyStorageException(Exception):
    def __init__(self, message: str, status_code: int):
        self.message = message
        self.status_code = status_code

class MediaException(Exception):
    def __init__(self, message: str, status_code: int):
        self.message = message
        self.status_code = status_code
        