import { db, storage } from '@/firebase';
import { getDownloadURL, uploadBytes, ref as imageRef } from 'firebase/storage';
import { setDoc, updateDoc, doc as documentRef, getDoc, getDocs, collection, Timestamp, limitToLast, deleteDoc, arrayUnion, increment, where, arrayRemove, query, orderBy, startAfter, limit, getCountFromServer, serverTimestamp } from 'firebase/firestore';

import uploadFiles from "@/utils/uploadFiles";
import generateRandomID from "@/utils/generateRandomID";


export default {

    /* 
        TODO:

            Fetch Files
            Send Files
            --------------
            Delete files (later)
    */

    /* 
        Fetch documents
        I think that's obvious
    */
    async fetchFiles() {
        try {

            const q = query(collection(db, 'files'), orderBy('createdAt', 'asc'));
            const snapshots = await getDocs(q);
            const docs = [];

            snapshots.forEach(item => {
                if (item.exists()) {
                    docs.unshift(item.data());
                }
            });

            return docs;
        } catch (error) {
            console.log('[fetchFiles() Error]');
            throw error;
        }
    },


    /* 
        Send Documents
    */
    async sendFiles({}, files) {
        try {
            const { urls, refs, sizes } = await uploadFiles(files);
            const result = [];

            for (let i = 0; i <= files.length - 1; i++) {
                result.push({ name: files[i].name, url: urls[i], ref: refs[i],  size: files[i].size });
            }

            const id = generateRandomID();

            const data = {
                userId: 0,
                isAnonymous: true,
                
                files: result,

                createdAt: serverTimestamp(),
                id
            };

            await setDoc(documentRef(db, 'files', id), data);
            await updateDoc(documentRef(db, 'space', 'used'), { size: increment(sizes) });
        } catch (error) {
            console.log('[sendFiles() Error]');
            throw error;
        }
    }


}