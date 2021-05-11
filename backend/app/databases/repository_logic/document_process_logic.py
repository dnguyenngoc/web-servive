from sqlalchemy.orm import Session
from typing import List, Optional
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session, joinedload, raiseload
from databases.models import DocumentProcess, DocumentField
from sqlalchemy import distinct
from sqlalchemy import func
import datetime


def get_all_by_doc(db_session: Session, document_id) -> DocumentProcess:
    return db_session.query(DocumentProcess) \
                            .filter(DocumentProcess.document_id==document_id) \
                            .options(joinedload('document_field')) \
                            .all()

def read_by_document_id_and_field_id(db_session: Session, document_id, field_id) -> DocumentProcess:
     return db_session.query(DocumentProcess) \
                            .filter(DocumentProcess.document_id==document_id and DocumentProcess.field_id == field_id) \
                            .count()