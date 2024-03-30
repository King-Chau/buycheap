import Head from 'next/head'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardHeader, CardContent, Card } from '@/components/ui/card'
import imageCompression from 'browser-image-compression'
import { useState, useEffect } from 'react'

export default function components() {
    const [imagePreview, setImagePreview] = useState(
    'data:image/webp;base64,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'
    )
    const [compressing, setCompressing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState({ data: '', error: '' })
    const [selectedFile, setSelectedFile] = useState(null)

    useEffect(() => {
        const pasteHandler = async event => {
            const items = (event.clipboardData || window.clipboardData).items
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile()
                    const file = new File([blob], 'pastedImage.jpg', { type: 'image/jpeg' })
                    await previewImage({ target: { files: [file] } })
                    break
                }
            }
        }

        window.addEventListener('paste', pasteHandler)
        return () => {
            window.removeEventListener('paste', pasteHandler)
        }
    }, [])

    const previewImage = async event => {
        const file = event.target.files[0]
        const validTypes = ['image/png', 'image/jpeg', 'image/webp']

        if (file && validTypes.includes(file.type)) {
            const options = {
                maxSizeMB: 5,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            }
            try {
                setCompressing(true)
                const compressedFile = await imageCompression(file, options)
                const reader = new FileReader()
                reader.onloadend = async () => {
                    setImagePreview(reader.result)
                    setCompressing(false)
                    setSelectedFile(compressedFile)
                    submitForm(compressedFile)
                }
                reader.readAsDataURL(compressedFile)
            } catch (error) {
                console.error('Error during compression', error)
                alert('Cannot compress the image.')
                setCompressing(false)
            }
        } else {
            alert('Please select an image file (png, jpeg, webp).')
            setImagePreview('')
        }
    }

    const submitForm = async file => {
        setLoading(true)

        const formData = new FormData()
        formData.append('image', file)

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
            timeout: 30000
        })
        if (!response.ok) {
            const errorData = await response.json()
            setResult({ data: '我好像没有识别出来，换一张图片或者重新上传！', error: errorData.error })
            setLoading(false)
            return
        }
        const data = await response.json()
        setResult({ data: data.result, error: '' })
        setLoading(false)
    }

    return (
        <div className="container">
            <Head>
                <title>消费降级</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <Card className="max-w-md ">
                    <CardHeader>
                        <div className="flex items-center">
                            <h2 className="text-2xl font-bold">消费降级，上传商品图，推荐平替商品~</h2>
                        </div>
                    </CardHeader>
                <div className="w-full max-w-md px-2 py-2">
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            submitForm(selectedFile)
                        }}
                        encType="multipart/form-data"
                    >
                        <div className="grid w-full gap-4 mt-4">
                            <Input
                                required
                                id="catImage"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={previewImage}
                            />
                            <Button type="submit" variant="dark" disabled={loading || compressing}>
                                {compressing ? '识别图像中' : loading ? '识别图像中' : '平替商品推荐'}
                            </Button>
                        </div>
                    </form>
                </div>
                    <CardContent>
                        <div className="mt-4 rounded-lg p-4">
                            <p className="ml-2 text-lg" style={{ textAlign: 'center' }}>
                                {compressing
                                    ? '👩🏻'
                                    : loading
                                    ? '平替商品推荐中...'
                                    : result.error
                                    ? `好像我没看懂照片，请重试或换一张图片！`
                                    : result.data ||
                                      '原商品名：耐克 Air Max 90 男款运动鞋 \n\n替代商品名：鸿星尔克 XY-1001 运动鞋'}
                            </p>
                        </div>
                        {compressing ? (
                            <div style={{ textAlign: 'center' }}>Scaning image...</div>
                        ) : (
                            imagePreview && (
                                <img
                                    alt="Analyzed cat image"
                                    className="aspect-content object-cover"
                                    height="500"
                                    src={imagePreview}
                                    width="500"
                                />
                            )
                        )}
                    </CardContent>
                </Card>
                <p className="tip mt-4">本服务不会收集、存储或使用任何与图片相关的个人信息</p>
                <footer className="flex justify-center items-center">
                    &copy; 2024
                    {'-'}
                    <a href="mailto:jingzhou1994@gmail.com" target="_blank" rel="noopener noreferrer">
                        {' '}
                        oujingzhou
                    </a>
                    . All rights reserved.
                </footer>
            </main>
        </div>
    )
}
